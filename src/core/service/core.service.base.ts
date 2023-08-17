import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import _ from "lodash";
import { config } from "@config/config";

export class CoreServiceBase {
  private requestInstance: AxiosInstance;
  private authStorageName: string = config.APP_AUTH_STORAGE;

  constructor(microservice: TListMicroService, addedUri?: string) {
    this._microserviceMapper.bind(this);

    if (!_.isUndefined(addedUri)) {
      this.requestInstance = axios.create({
        baseURL: this._microserviceMapper(microservice) + addedUri,
      });
    } else {
      this.requestInstance = axios.create({
        baseURL: this._microserviceMapper(microservice),
      });
    }
  }
  private _microserviceMapper(ms: TListMicroService): string {
    if (ms === "DEFAULT") {
      return config.MICROSERVICE_DEFAULT;
    } else {
      return "not-exist";
    }
  }
  private _makeHeader(
    useAuth?: boolean,
    extraHeader?: Record<string, string>
  ): AxiosRequestConfig["headers"] {
    const header: AxiosRequestConfig["headers"] = {
      "Content-Type": "application/json; charset=utf-8",
    };

    const authToken = window.localStorage.getItem(this.authStorageName);

    if (extraHeader && Object.keys(extraHeader).length > 0) {
      Object.keys(extraHeader).forEach((v) => {
        header[v] = extraHeader[v];
      });
    }

    if (useAuth && authToken) {
      header["Authorization"] = `Bearer ${authToken}`;
    }

    return header;
  }

  private _metaMapper(meta?: BaseServicemeta) {
    const qParam = new URLSearchParams();

    if (meta?.page) {
      qParam.set("page", String(meta.page));
    }

    if (meta?.perPage) {
      qParam.set("size", String(meta.perPage));
    }

    if (meta?.filter && meta.filter.length > 0) {
      meta.filter.forEach((v) => {
        if (v.key && v.value) qParam.set(v.key, v.value.join(""));
      });
    }

    return decodeURIComponent(qParam.toString());
  }

  private _responseMapper<T>(arg: {
    data: T;
    message: string;
    meta: BaseServicemeta;
  }): {
    data: T;
    message: string;
    meta: BaseServicemeta;
  } {
    return {
      data: arg.data,
      message: arg.message,
      meta: arg.meta,
    };
  }

  protected async HTTP<T>(arg: {
    method: "get" | "post" | "delete" | "put" | "patch";
    uri: string;
    meta: BaseServicemeta;
    body?: unknown;
    useAuth?: boolean;
    extraHeader?: Record<string, string>;
  }) {
    const header = this._makeHeader(arg.useAuth, arg.extraHeader);
    const forgeMeta = this._metaMapper(arg.meta);
    const forgeURI = forgeMeta ? `${arg.uri}?${forgeMeta}` : arg.uri;
    let response: AxiosResponse<T>;

    try {
      if (arg.method == "delete" || arg.method == "get") {
        response = await this.requestInstance[arg.method](forgeURI, {
          headers: header,
        });
      } else {
        response = await this.requestInstance[arg.method](forgeURI, arg.body, {
          headers: header,
        });
      }
      return this._responseMapper<T>({
        data: response.data|| ([] as T),
        message: "Succsefully fetch",
        meta: { ...arg.meta },
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          window.dispatchEvent(new Event("APP_AUTH_UNAUTHORIZED"));
        }
        throw new Error(error.response?.data.message || error.message);
      } else {
        throw new Error("HTTP UNKOWN ERROR");
      }
    }
  }

  public mock() {
    return;
  }
}

type TListMicroService = "DEFAULT";

export type BaseServicemeta = {
  page?: number;
  perPage?: number;
  total?: number;
  filter?: Array<{ key?: string; value?: Array<string> }>;
};
