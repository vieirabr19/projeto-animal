export interface Animal {
  id: number;
  postData: Date;
  url: string;
  description: string;
  allowComments: boolean;
  comments: number;
  likes: number;
  userId: number;
}

export type Animais = Array<Animal>;