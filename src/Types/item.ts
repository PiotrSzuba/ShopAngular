export enum DetailType {
  List,
  KeyValue,
  Textarea,
}

export interface IItem {
  id: string;
  previewImage?: string;
  name: string;
  price: number;
  typeName: string;
  types: IItemType[];
  details?: IItemDetailsSection[];
  images: IImage[];
}

export interface IItemType {
  id: string;
  name: string;
  isInStock: boolean;
  discountValue: number;
}

export interface IItemDetailsSection {
  id?: string;
  title?: string;
  type: DetailType;
  values: ItemDetailValue[];
}

export interface ItemDetailValue {
  id?: string;
  value: string;
  order: number;
}

export interface IImage {
  id?: string;
  file: string;
  thumbnailFile?: string;
}

export interface ItemDetails {
  id?: string;
  previewImage: string;
  name: string;
  price: number;
  onDiscount?: boolean;
  isInStock?: boolean;
  discountValue?: number;
  sizes?: string[];
  mainDescription?: string;
  features?: string[];
  designers?: string[];
  images: string[];
  category?: string;
  details?: string[];
  additionalInformation?: string[];
}

export interface ICartItem {
  previewImage: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}
