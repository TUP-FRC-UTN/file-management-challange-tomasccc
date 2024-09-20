export interface FileItem {
  id: string;
  name: string;
  creation: Date;
  owners: FileOwner[];
  type: FileType;
  parentId?: string;
}

export interface FileOwner {
  id: number;
  name: string;
  avatarUrl: string;
}

export enum FileType {
  FOLDER,
  FILE
}
