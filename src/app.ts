import { RequestItem, ResponseItem } from "./model";

export const any = (requestItem: RequestItem[]): ResponseItem[] => {
    console.log("Processing RequestItem:" + requestItem);
    const responseItems: ResponseItem[] = [];
    return responseItems;
}