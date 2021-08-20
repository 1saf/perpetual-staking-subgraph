import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Staked,
  Transfer,
  Unstaked,
  Withdrawn
} from "../generated/PerpetualStakingContract/PerpetualStakingContract"
import { Staker } from "../generated/schema"

function getStaker(address: Address): Staker {
  let staker = Staker.load(address.toHexString());
  if (!staker) {
    staker = new Staker(address.toHexString());
    staker.totalStaked = BigInt.fromI32(0);
    staker.save();
  }
  return staker as Staker;
}

export function handleStaked(event: Staked): void {
  let staker = getStaker(event.params.staker);
  staker.totalStaked = staker.totalStaked.plus(event.params.amount);
  staker.save();
}

export function handleTransfer(event: Transfer): void {
  let oldStaker = getStaker(event.params.from);
  let newStaker = getStaker(event.params.to);
  oldStaker.totalStaked = oldStaker.totalStaked.minus(event.params.value);
  newStaker.totalStaked = oldStaker.totalStaked.plus(event.params.value);
  oldStaker.save();
  newStaker.save();
}

export function handleUnstaked(event: Unstaked): void {
  let staker = getStaker(event.params.staker);
  staker.totalStaked = staker.totalStaked.minus(event.params.amount);
  staker.save();
}
