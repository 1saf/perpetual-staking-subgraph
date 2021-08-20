// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class StakeModuleAdded extends ethereum.Event {
  get params(): StakeModuleAdded__Params {
    return new StakeModuleAdded__Params(this);
  }
}

export class StakeModuleAdded__Params {
  _event: StakeModuleAdded;

  constructor(event: StakeModuleAdded) {
    this._event = event;
  }

  get stakedModule(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class StakeModuleRemoved extends ethereum.Event {
  get params(): StakeModuleRemoved__Params {
    return new StakeModuleRemoved__Params(this);
  }
}

export class StakeModuleRemoved__Params {
  _event: StakeModuleRemoved;

  constructor(event: StakeModuleRemoved) {
    this._event = event;
  }

  get stakedModule(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Staked extends ethereum.Event {
  get params(): Staked__Params {
    return new Staked__Params(this);
  }
}

export class Staked__Params {
  _event: Staked;

  constructor(event: Staked) {
    this._event = event;
  }

  get staker(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Unstaked extends ethereum.Event {
  get params(): Unstaked__Params {
    return new Unstaked__Params(this);
  }
}

export class Unstaked__Params {
  _event: Unstaked;

  constructor(event: Unstaked) {
    this._event = event;
  }

  get staker(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Withdrawn extends ethereum.Event {
  get params(): Withdrawn__Params {
    return new Withdrawn__Params(this);
  }
}

export class Withdrawn__Params {
  _event: Withdrawn;

  constructor(event: Withdrawn) {
    this._event = event;
  }

  get staker(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PerpetualStakingContract extends ethereum.SmartContract {
  static bind(address: Address): PerpetualStakingContract {
    return new PerpetualStakingContract("PerpetualStakingContract", address);
  }

  TOKEN_AMOUNT_LIMIT(): BigInt {
    let result = super.call(
      "TOKEN_AMOUNT_LIMIT",
      "TOKEN_AMOUNT_LIMIT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_TOKEN_AMOUNT_LIMIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "TOKEN_AMOUNT_LIMIT",
      "TOKEN_AMOUNT_LIMIT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowance(param0: Address, param1: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return result[0].toBigInt();
  }

  try_allowance(param0: Address, param1: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(param0: Address, param1: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return result[0].toBoolean();
  }

  try_approve(param0: Address, param1: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(_owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(_owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfAt(_owner: Address, __blockNumber: BigInt): BigInt {
    let result = super.call(
      "balanceOfAt",
      "balanceOfAt(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(__blockNumber)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOfAt(
    _owner: Address,
    __blockNumber: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOfAt",
      "balanceOfAt(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(__blockNumber)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  candidate(): Address {
    let result = super.call("candidate", "candidate():(address)", []);

    return result[0].toAddress();
  }

  try_candidate(): ethereum.CallResult<Address> {
    let result = super.tryCall("candidate", "candidate():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  cooldownPeriod(): BigInt {
    let result = super.call("cooldownPeriod", "cooldownPeriod():(uint256)", []);

    return result[0].toBigInt();
  }

  try_cooldownPeriod(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "cooldownPeriod",
      "cooldownPeriod():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getStakeModuleLength(): BigInt {
    let result = super.call(
      "getStakeModuleLength",
      "getStakeModuleLength():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getStakeModuleLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getStakeModuleLength",
      "getStakeModuleLength():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isStakeModuleExisted(_stakeModule: Address): boolean {
    let result = super.call(
      "isStakeModuleExisted",
      "isStakeModuleExisted(address):(bool)",
      [ethereum.Value.fromAddress(_stakeModule)]
    );

    return result[0].toBoolean();
  }

  try_isStakeModuleExisted(
    _stakeModule: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isStakeModuleExisted",
      "isStakeModuleExisted(address):(bool)",
      [ethereum.Value.fromAddress(_stakeModule)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  perpToken(): Address {
    let result = super.call("perpToken", "perpToken():(address)", []);

    return result[0].toAddress();
  }

  try_perpToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("perpToken", "perpToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stakeModules(param0: BigInt): Address {
    let result = super.call("stakeModules", "stakeModules(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_stakeModules(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "stakeModules",
      "stakeModules(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stakerCooldown(param0: Address): BigInt {
    let result = super.call(
      "stakerCooldown",
      "stakerCooldown(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_stakerCooldown(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "stakerCooldown",
      "stakerCooldown(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stakerWithdrawPendingBalance(param0: Address): BigInt {
    let result = super.call(
      "stakerWithdrawPendingBalance",
      "stakerWithdrawPendingBalance(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_stakerWithdrawPendingBalance(
    param0: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "stakerWithdrawPendingBalance",
      "stakerWithdrawPendingBalance(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupplyAt(__blockNumber: BigInt): BigInt {
    let result = super.call(
      "totalSupplyAt",
      "totalSupplyAt(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(__blockNumber)]
    );

    return result[0].toBigInt();
  }

  try_totalSupplyAt(__blockNumber: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupplyAt",
      "totalSupplyAt(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(__blockNumber)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(param0: Address, param1: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(param0: Address, param1: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(param0: Address, param1: Address, param2: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    param0: Address,
    param1: Address,
    param2: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class AddStakeModuleCall extends ethereum.Call {
  get inputs(): AddStakeModuleCall__Inputs {
    return new AddStakeModuleCall__Inputs(this);
  }

  get outputs(): AddStakeModuleCall__Outputs {
    return new AddStakeModuleCall__Outputs(this);
  }
}

export class AddStakeModuleCall__Inputs {
  _call: AddStakeModuleCall;

  constructor(call: AddStakeModuleCall) {
    this._call = call;
  }

  get _stakeModule(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddStakeModuleCall__Outputs {
  _call: AddStakeModuleCall;

  constructor(call: AddStakeModuleCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _perpToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _cooldownPeriod(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RemoveStakeModuleCall extends ethereum.Call {
  get inputs(): RemoveStakeModuleCall__Inputs {
    return new RemoveStakeModuleCall__Inputs(this);
  }

  get outputs(): RemoveStakeModuleCall__Outputs {
    return new RemoveStakeModuleCall__Outputs(this);
  }
}

export class RemoveStakeModuleCall__Inputs {
  _call: RemoveStakeModuleCall;

  constructor(call: RemoveStakeModuleCall) {
    this._call = call;
  }

  get _stakeModule(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveStakeModuleCall__Outputs {
  _call: RemoveStakeModuleCall;

  constructor(call: RemoveStakeModuleCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetCooldownPeriodCall extends ethereum.Call {
  get inputs(): SetCooldownPeriodCall__Inputs {
    return new SetCooldownPeriodCall__Inputs(this);
  }

  get outputs(): SetCooldownPeriodCall__Outputs {
    return new SetCooldownPeriodCall__Outputs(this);
  }
}

export class SetCooldownPeriodCall__Inputs {
  _call: SetCooldownPeriodCall;

  constructor(call: SetCooldownPeriodCall) {
    this._call = call;
  }

  get _cooldownPeriod(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetCooldownPeriodCall__Outputs {
  _call: SetCooldownPeriodCall;

  constructor(call: SetCooldownPeriodCall) {
    this._call = call;
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get _amount(): StakeCall_amountStruct {
    return this._call.inputValues[0].value.toTuple() as StakeCall_amountStruct;
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }
}

export class StakeCall_amountStruct extends ethereum.Tuple {
  get d(): BigInt {
    return this[0].toBigInt();
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UnstakeCall extends ethereum.Call {
  get inputs(): UnstakeCall__Inputs {
    return new UnstakeCall__Inputs(this);
  }

  get outputs(): UnstakeCall__Outputs {
    return new UnstakeCall__Outputs(this);
  }
}

export class UnstakeCall__Inputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }
}

export class UnstakeCall__Outputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }
}

export class UpdateOwnerCall extends ethereum.Call {
  get inputs(): UpdateOwnerCall__Inputs {
    return new UpdateOwnerCall__Inputs(this);
  }

  get outputs(): UpdateOwnerCall__Outputs {
    return new UpdateOwnerCall__Outputs(this);
  }
}

export class UpdateOwnerCall__Inputs {
  _call: UpdateOwnerCall;

  constructor(call: UpdateOwnerCall) {
    this._call = call;
  }
}

export class UpdateOwnerCall__Outputs {
  _call: UpdateOwnerCall;

  constructor(call: UpdateOwnerCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}