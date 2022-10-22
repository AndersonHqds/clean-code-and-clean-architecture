import ItemRepository from "../domain/repository/ItemRepository";
import ItemDTO from "./ItemDTO";

export default class GetItem {
  constructor(readonly itemRepository: ItemRepository) {}

  async execute(idItem: number): Promise<ItemDTO> {
    const item = await this.itemRepository.getItem(idItem);
    return ItemDTO.fromEntity(item);
  }
}

type Output = {
  idItem: number;
  description: string;
  price: number;
  width: number;
  height: number;
  length: number;
  weight: number;
  volume: number;
  density: number;
};
