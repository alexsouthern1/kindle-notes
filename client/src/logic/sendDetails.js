import { get, post } from "./fetch";

export const sendDetails = async payload => {
  return await get(
    // TODO: CHANGE 
    `/new?age=${payload.age}&gender=${payload.gender}&product=${payload.product}&term=${payload.term}&interestRate=${payload.interestRate}&assuranceProduct=${payload.assuranceProduct}&increaseAmount=${payload.increaseAmount}&principal=${payload.principal}&probabilityType=${payload.probabilityType}&deferLength=${payload.deferLength}`
  );
};

export const sendApi = async payload => {
  return await post("/api", JSON.stringify(payload));
};

export const toggleFavouriteFlag = async payload => {  
  return await post(`/favourite/update?id=${payload.id}`, JSON.stringify(payload))
}