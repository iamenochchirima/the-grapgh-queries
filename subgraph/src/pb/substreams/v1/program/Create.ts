// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";

export class Create {
  static encode(message: Create, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.name);

    writer.uint32(18);
    writer.string(message.symbol);

    writer.uint32(26);
    writer.string(message.uri);
  }

  static decode(reader: Reader, length: i32): Create {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Create();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        case 3:
          message.uri = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  name: string;
  symbol: string;
  uri: string;

  constructor(name: string = "", symbol: string = "", uri: string = "") {
    this.name = name;
    this.symbol = symbol;
    this.uri = uri;
  }
}
