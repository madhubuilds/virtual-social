import useInventoryStore from "../../store/inventory/useInventoryStore";

export const useInventoryLogic = () => {
  const coins = useInventoryStore((s) => s.coins);
  const owned = useInventoryStore((s) => s.owned);
  const buyAsset = useInventoryStore((s) => s.buyAsset);

  return { coins, owned, buyAsset };
};
