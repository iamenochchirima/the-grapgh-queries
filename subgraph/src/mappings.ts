import { Protobuf } from "as-proto/assembly";
import { Data as protoData } from "./pb/substreams/v1/program/Data";
import {
  Global,
  BondingCurve,
  CreateEvent,
  TradeEvent,
  CompleteEvent,
  SetParamsEvent,
} from "../generated/schema";
import { BigInt, log, Bytes } from "@graphprotocol/graph-ts";

export function handleTriggers(bytes: Uint8Array): void {
  const input = Protobuf.decode<protoData>(bytes, protoData.decode);

  // Process CreateEvent
  for (let i = 0; i < input.createEventList.length; i++) {
    const createEvent = input.createEventList[i];
    const eventId = `${createEvent.mint.toString()}-${i}`;

    let entity = new CreateEvent(eventId);
    entity.name = createEvent.name;
    entity.symbol = createEvent.symbol;
    entity.uri = createEvent.uri;
    entity.mint = createEvent.mint;
    entity.bondingCurve = createEvent.bondingCurve;
    entity.user = createEvent.user;
    entity.save();
  }

  // Process TradeEvent
  for (let i = 0; i < input.tradeEventList.length; i++) {
    const tradeEvent = input.tradeEventList[i];
    const eventId = `${tradeEvent.mint.toString()}-${i}`;

    let entity = new TradeEvent(eventId);
    entity.mint = tradeEvent.mint;
    entity.solAmount = BigInt.fromU64(tradeEvent.solAmount);
    entity.tokenAmount = BigInt.fromU64(tradeEvent.tokenAmount);
    entity.isBuy = tradeEvent.isBuy as boolean
    entity.user = tradeEvent.user;
    entity.timestamp = BigInt.fromI64(tradeEvent.timestamp);
    entity.virtualSolReserves = BigInt.fromU64(tradeEvent.virtualSolReserves);
    entity.virtualTokenReserves = BigInt.fromU64(tradeEvent.virtualTokenReserves);
    entity.realSolReserves = BigInt.fromU64(tradeEvent.realSolReserves);
    entity.realTokenReserves = BigInt.fromU64(tradeEvent.realTokenReserves);
    entity.save();
  }

  // Process CompleteEvent
  for (let i = 0; i < input.completeEventList.length; i++) {
    const completeEvent = input.completeEventList[i];
    const eventId = `${completeEvent.mint.toString()}-${i}`;

    let entity = new CompleteEvent(eventId);
    entity.user = completeEvent.user;
    entity.mint = completeEvent.mint;
    entity.bondingCurve = completeEvent.bondingCurve;
    entity.timestamp = BigInt.fromI64(completeEvent.timestamp);
    entity.save();
  }

  // Process SetParamsEvent
  for (let i = 0; i < input.setParamsEventList.length; i++) {
    const setParamsEvent = input.setParamsEventList[i];
    const eventId = `${setParamsEvent.feeRecipient.toString()}-${i}`;

    let entity = new SetParamsEvent(eventId);
    entity.feeRecipient = setParamsEvent.feeRecipient;
    entity.initialVirtualTokenReserves = BigInt.fromU64(setParamsEvent.initialVirtualTokenReserves);
    entity.initialVirtualSolReserves = BigInt.fromU64(setParamsEvent.initialVirtualSolReserves);
    entity.initialRealTokenReserves = BigInt.fromU64(setParamsEvent.initialRealTokenReserves);
    entity.tokenTotalSupply = BigInt.fromU64(setParamsEvent.tokenTotalSupply);
    entity.feeBasisPoints = BigInt.fromU64(setParamsEvent.feeBasisPoints);
    entity.save();
  }
}