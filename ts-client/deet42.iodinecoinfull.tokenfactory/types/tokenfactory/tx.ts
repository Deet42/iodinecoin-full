/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "deet42.iodinecoinfull.tokenfactory";

export interface MsgCreateDenom {
  owner: string;
  denom: string;
  description: string;
  ticker: string;
  precision: number;
  url: string;
  maxSupply: number;
  supply: number;
  canChangeMaxSupply: boolean;
}

export interface MsgCreateDenomResponse {}

export interface MsgUpdateDenom {
  owner: string;
  denom: string;
  description: string;
  ticker: string;
  precision: number;
  url: string;
  maxSupply: number;
  supply: number;
  canChangeMaxSupply: boolean;
}

export interface MsgUpdateDenomResponse {}

export interface MsgDeleteDenom {
  owner: string;
  denom: string;
}

export interface MsgDeleteDenomResponse {}

const baseMsgCreateDenom: object = {
  owner: "",
  denom: "",
  description: "",
  ticker: "",
  precision: 0,
  url: "",
  maxSupply: 0,
  supply: 0,
  canChangeMaxSupply: false,
};

export const MsgCreateDenom = {
  encode(message: MsgCreateDenom, writer: Writer = Writer.create()): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(34).string(message.ticker);
    }
    if (message.precision !== 0) {
      writer.uint32(40).int32(message.precision);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(56).int32(message.maxSupply);
    }
    if (message.supply !== 0) {
      writer.uint32(64).int32(message.supply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(72).bool(message.canChangeMaxSupply);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDenom } as MsgCreateDenom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.ticker = reader.string();
          break;
        case 5:
          message.precision = reader.int32();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.maxSupply = reader.int32();
          break;
        case 8:
          message.supply = reader.int32();
          break;
        case 9:
          message.canChangeMaxSupply = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDenom {
    const message = { ...baseMsgCreateDenom } as MsgCreateDenom;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = String(object.ticker);
    } else {
      message.ticker = "";
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = Number(object.precision);
    } else {
      message.precision = 0;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Number(object.maxSupply);
    } else {
      message.maxSupply = 0;
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = Number(object.supply);
    } else {
      message.supply = 0;
    }
    if (
      object.canChangeMaxSupply !== undefined &&
      object.canChangeMaxSupply !== null
    ) {
      message.canChangeMaxSupply = Boolean(object.canChangeMaxSupply);
    } else {
      message.canChangeMaxSupply = false;
    }
    return message;
  },

  toJSON(message: MsgCreateDenom): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.description !== undefined &&
      (obj.description = message.description);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.precision !== undefined && (obj.precision = message.precision);
    message.url !== undefined && (obj.url = message.url);
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
    message.supply !== undefined && (obj.supply = message.supply);
    message.canChangeMaxSupply !== undefined &&
      (obj.canChangeMaxSupply = message.canChangeMaxSupply);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom {
    const message = { ...baseMsgCreateDenom } as MsgCreateDenom;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    } else {
      message.ticker = "";
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = object.precision;
    } else {
      message.precision = 0;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply;
    } else {
      message.maxSupply = 0;
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply;
    } else {
      message.supply = 0;
    }
    if (
      object.canChangeMaxSupply !== undefined &&
      object.canChangeMaxSupply !== null
    ) {
      message.canChangeMaxSupply = object.canChangeMaxSupply;
    } else {
      message.canChangeMaxSupply = false;
    }
    return message;
  },
};

const baseMsgCreateDenomResponse: object = {};

export const MsgCreateDenomResponse = {
  encode(_: MsgCreateDenomResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDenomResponse } as MsgCreateDenomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateDenomResponse {
    const message = { ...baseMsgCreateDenomResponse } as MsgCreateDenomResponse;
    return message;
  },

  toJSON(_: MsgCreateDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse {
    const message = { ...baseMsgCreateDenomResponse } as MsgCreateDenomResponse;
    return message;
  },
};

const baseMsgUpdateDenom: object = {
  owner: "",
  denom: "",
  description: "",
  ticker: "",
  precision: 0,
  url: "",
  maxSupply: 0,
  supply: 0,
  canChangeMaxSupply: false,
};

export const MsgUpdateDenom = {
  encode(message: MsgUpdateDenom, writer: Writer = Writer.create()): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(34).string(message.ticker);
    }
    if (message.precision !== 0) {
      writer.uint32(40).int32(message.precision);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(56).int32(message.maxSupply);
    }
    if (message.supply !== 0) {
      writer.uint32(64).int32(message.supply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(72).bool(message.canChangeMaxSupply);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDenom {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDenom } as MsgUpdateDenom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.ticker = reader.string();
          break;
        case 5:
          message.precision = reader.int32();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.maxSupply = reader.int32();
          break;
        case 8:
          message.supply = reader.int32();
          break;
        case 9:
          message.canChangeMaxSupply = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDenom {
    const message = { ...baseMsgUpdateDenom } as MsgUpdateDenom;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = String(object.ticker);
    } else {
      message.ticker = "";
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = Number(object.precision);
    } else {
      message.precision = 0;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Number(object.maxSupply);
    } else {
      message.maxSupply = 0;
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = Number(object.supply);
    } else {
      message.supply = 0;
    }
    if (
      object.canChangeMaxSupply !== undefined &&
      object.canChangeMaxSupply !== null
    ) {
      message.canChangeMaxSupply = Boolean(object.canChangeMaxSupply);
    } else {
      message.canChangeMaxSupply = false;
    }
    return message;
  },

  toJSON(message: MsgUpdateDenom): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.description !== undefined &&
      (obj.description = message.description);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.precision !== undefined && (obj.precision = message.precision);
    message.url !== undefined && (obj.url = message.url);
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
    message.supply !== undefined && (obj.supply = message.supply);
    message.canChangeMaxSupply !== undefined &&
      (obj.canChangeMaxSupply = message.canChangeMaxSupply);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateDenom>): MsgUpdateDenom {
    const message = { ...baseMsgUpdateDenom } as MsgUpdateDenom;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    } else {
      message.ticker = "";
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = object.precision;
    } else {
      message.precision = 0;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply;
    } else {
      message.maxSupply = 0;
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply;
    } else {
      message.supply = 0;
    }
    if (
      object.canChangeMaxSupply !== undefined &&
      object.canChangeMaxSupply !== null
    ) {
      message.canChangeMaxSupply = object.canChangeMaxSupply;
    } else {
      message.canChangeMaxSupply = false;
    }
    return message;
  },
};

const baseMsgUpdateDenomResponse: object = {};

export const MsgUpdateDenomResponse = {
  encode(_: MsgUpdateDenomResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDenomResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDenomResponse } as MsgUpdateDenomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateDenomResponse {
    const message = { ...baseMsgUpdateDenomResponse } as MsgUpdateDenomResponse;
    return message;
  },

  toJSON(_: MsgUpdateDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateDenomResponse>): MsgUpdateDenomResponse {
    const message = { ...baseMsgUpdateDenomResponse } as MsgUpdateDenomResponse;
    return message;
  },
};

const baseMsgDeleteDenom: object = { owner: "", denom: "" };

export const MsgDeleteDenom = {
  encode(message: MsgDeleteDenom, writer: Writer = Writer.create()): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDenom {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteDenom } as MsgDeleteDenom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDenom {
    const message = { ...baseMsgDeleteDenom } as MsgDeleteDenom;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteDenom): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteDenom>): MsgDeleteDenom {
    const message = { ...baseMsgDeleteDenom } as MsgDeleteDenom;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgDeleteDenomResponse: object = {};

export const MsgDeleteDenomResponse = {
  encode(_: MsgDeleteDenomResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDenomResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteDenomResponse } as MsgDeleteDenomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteDenomResponse {
    const message = { ...baseMsgDeleteDenomResponse } as MsgDeleteDenomResponse;
    return message;
  },

  toJSON(_: MsgDeleteDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteDenomResponse>): MsgDeleteDenomResponse {
    const message = { ...baseMsgDeleteDenomResponse } as MsgDeleteDenomResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteDenom(request: MsgDeleteDenom): Promise<MsgDeleteDenomResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request(
      "deet42.iodinecoinfull.tokenfactory.Msg",
      "CreateDenom",
      data
    );
    return promise.then((data) =>
      MsgCreateDenomResponse.decode(new Reader(data))
    );
  }

  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse> {
    const data = MsgUpdateDenom.encode(request).finish();
    const promise = this.rpc.request(
      "deet42.iodinecoinfull.tokenfactory.Msg",
      "UpdateDenom",
      data
    );
    return promise.then((data) =>
      MsgUpdateDenomResponse.decode(new Reader(data))
    );
  }

  DeleteDenom(request: MsgDeleteDenom): Promise<MsgDeleteDenomResponse> {
    const data = MsgDeleteDenom.encode(request).finish();
    const promise = this.rpc.request(
      "deet42.iodinecoinfull.tokenfactory.Msg",
      "DeleteDenom",
      data
    );
    return promise.then((data) =>
      MsgDeleteDenomResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
