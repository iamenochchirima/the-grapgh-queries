// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class Global extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Global entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Global must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Global", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Global | null {
    return changetype<Global | null>(store.get_in_block("Global", id));
  }

  static load(id: string): Global | null {
    return changetype<Global | null>(store.get("Global", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get initialized(): boolean {
    let value = this.get("initialized");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set initialized(value: boolean) {
    this.set("initialized", Value.fromBoolean(value));
  }

  get authority(): string {
    let value = this.get("authority");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set authority(value: string) {
    this.set("authority", Value.fromString(value));
  }

  get feeRecipient(): string {
    let value = this.get("feeRecipient");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set feeRecipient(value: string) {
    this.set("feeRecipient", Value.fromString(value));
  }

  get initialVirtualTokenReserves(): BigInt {
    let value = this.get("initialVirtualTokenReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set initialVirtualTokenReserves(value: BigInt) {
    this.set("initialVirtualTokenReserves", Value.fromBigInt(value));
  }

  get initialVirtualSolReserves(): BigInt {
    let value = this.get("initialVirtualSolReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set initialVirtualSolReserves(value: BigInt) {
    this.set("initialVirtualSolReserves", Value.fromBigInt(value));
  }

  get initialRealTokenReserves(): BigInt {
    let value = this.get("initialRealTokenReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set initialRealTokenReserves(value: BigInt) {
    this.set("initialRealTokenReserves", Value.fromBigInt(value));
  }

  get tokenTotalSupply(): BigInt {
    let value = this.get("tokenTotalSupply");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenTotalSupply(value: BigInt) {
    this.set("tokenTotalSupply", Value.fromBigInt(value));
  }

  get feeBasisPoints(): BigInt {
    let value = this.get("feeBasisPoints");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set feeBasisPoints(value: BigInt) {
    this.set("feeBasisPoints", Value.fromBigInt(value));
  }
}

export class BondingCurve extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BondingCurve entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BondingCurve must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("BondingCurve", id.toString(), this);
    }
  }

  static loadInBlock(id: string): BondingCurve | null {
    return changetype<BondingCurve | null>(
      store.get_in_block("BondingCurve", id),
    );
  }

  static load(id: string): BondingCurve | null {
    return changetype<BondingCurve | null>(store.get("BondingCurve", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get mint(): string {
    let value = this.get("mint");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set mint(value: string) {
    this.set("mint", Value.fromString(value));
  }

  get virtualTokenReserves(): BigInt {
    let value = this.get("virtualTokenReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set virtualTokenReserves(value: BigInt) {
    this.set("virtualTokenReserves", Value.fromBigInt(value));
  }

  get virtualSolReserves(): BigInt {
    let value = this.get("virtualSolReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set virtualSolReserves(value: BigInt) {
    this.set("virtualSolReserves", Value.fromBigInt(value));
  }

  get realTokenReserves(): BigInt {
    let value = this.get("realTokenReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set realTokenReserves(value: BigInt) {
    this.set("realTokenReserves", Value.fromBigInt(value));
  }

  get realSolReserves(): BigInt {
    let value = this.get("realSolReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set realSolReserves(value: BigInt) {
    this.set("realSolReserves", Value.fromBigInt(value));
  }

  get tokenTotalSupply(): BigInt {
    let value = this.get("tokenTotalSupply");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenTotalSupply(value: BigInt) {
    this.set("tokenTotalSupply", Value.fromBigInt(value));
  }

  get complete(): boolean {
    let value = this.get("complete");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set complete(value: boolean) {
    this.set("complete", Value.fromBoolean(value));
  }
}

export class CreateEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CreateEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CreateEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("CreateEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): CreateEvent | null {
    return changetype<CreateEvent | null>(
      store.get_in_block("CreateEvent", id),
    );
  }

  static load(id: string): CreateEvent | null {
    return changetype<CreateEvent | null>(store.get("CreateEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get uri(): string {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set uri(value: string) {
    this.set("uri", Value.fromString(value));
  }

  get mint(): string {
    let value = this.get("mint");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set mint(value: string) {
    this.set("mint", Value.fromString(value));
  }

  get bondingCurve(): string {
    let value = this.get("bondingCurve");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set bondingCurve(value: string) {
    this.set("bondingCurve", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }
}

export class TradeEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TradeEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TradeEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("TradeEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TradeEvent | null {
    return changetype<TradeEvent | null>(store.get_in_block("TradeEvent", id));
  }

  static load(id: string): TradeEvent | null {
    return changetype<TradeEvent | null>(store.get("TradeEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get mint(): string {
    let value = this.get("mint");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set mint(value: string) {
    this.set("mint", Value.fromString(value));
  }

  get solAmount(): BigInt {
    let value = this.get("solAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set solAmount(value: BigInt) {
    this.set("solAmount", Value.fromBigInt(value));
  }

  get tokenAmount(): BigInt {
    let value = this.get("tokenAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenAmount(value: BigInt) {
    this.set("tokenAmount", Value.fromBigInt(value));
  }

  get isBuy(): boolean {
    let value = this.get("isBuy");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isBuy(value: boolean) {
    this.set("isBuy", Value.fromBoolean(value));
  }

  get user(): string {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get virtualSolReserves(): BigInt {
    let value = this.get("virtualSolReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set virtualSolReserves(value: BigInt) {
    this.set("virtualSolReserves", Value.fromBigInt(value));
  }

  get virtualTokenReserves(): BigInt {
    let value = this.get("virtualTokenReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set virtualTokenReserves(value: BigInt) {
    this.set("virtualTokenReserves", Value.fromBigInt(value));
  }

  get realSolReserves(): BigInt {
    let value = this.get("realSolReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set realSolReserves(value: BigInt) {
    this.set("realSolReserves", Value.fromBigInt(value));
  }

  get realTokenReserves(): BigInt {
    let value = this.get("realTokenReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set realTokenReserves(value: BigInt) {
    this.set("realTokenReserves", Value.fromBigInt(value));
  }
}

export class CompleteEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CompleteEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CompleteEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("CompleteEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): CompleteEvent | null {
    return changetype<CompleteEvent | null>(
      store.get_in_block("CompleteEvent", id),
    );
  }

  static load(id: string): CompleteEvent | null {
    return changetype<CompleteEvent | null>(store.get("CompleteEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get mint(): string {
    let value = this.get("mint");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set mint(value: string) {
    this.set("mint", Value.fromString(value));
  }

  get bondingCurve(): string {
    let value = this.get("bondingCurve");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set bondingCurve(value: string) {
    this.set("bondingCurve", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class SetParamsEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SetParamsEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SetParamsEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("SetParamsEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): SetParamsEvent | null {
    return changetype<SetParamsEvent | null>(
      store.get_in_block("SetParamsEvent", id),
    );
  }

  static load(id: string): SetParamsEvent | null {
    return changetype<SetParamsEvent | null>(store.get("SetParamsEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get feeRecipient(): string {
    let value = this.get("feeRecipient");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set feeRecipient(value: string) {
    this.set("feeRecipient", Value.fromString(value));
  }

  get initialVirtualTokenReserves(): BigInt {
    let value = this.get("initialVirtualTokenReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set initialVirtualTokenReserves(value: BigInt) {
    this.set("initialVirtualTokenReserves", Value.fromBigInt(value));
  }

  get initialVirtualSolReserves(): BigInt {
    let value = this.get("initialVirtualSolReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set initialVirtualSolReserves(value: BigInt) {
    this.set("initialVirtualSolReserves", Value.fromBigInt(value));
  }

  get initialRealTokenReserves(): BigInt {
    let value = this.get("initialRealTokenReserves");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set initialRealTokenReserves(value: BigInt) {
    this.set("initialRealTokenReserves", Value.fromBigInt(value));
  }

  get tokenTotalSupply(): BigInt {
    let value = this.get("tokenTotalSupply");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenTotalSupply(value: BigInt) {
    this.set("tokenTotalSupply", Value.fromBigInt(value));
  }

  get feeBasisPoints(): BigInt {
    let value = this.get("feeBasisPoints");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set feeBasisPoints(value: BigInt) {
    this.set("feeBasisPoints", Value.fromBigInt(value));
  }
}
