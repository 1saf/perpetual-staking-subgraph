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

export function handleUnstaked(event: Unstaked): void {
  let staker = getStaker(event.params.staker);
  staker.totalStaked = staker.totalStaked.minus(event.params.amount);
  staker.save();
}
