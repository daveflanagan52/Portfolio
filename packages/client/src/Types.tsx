interface IProject {
  name: string;
  description: string;
  thumbnail: string;
  tags: string[];
  url: string;
  github: string;
}

interface IPhoto {
  name: string;
  url: string;
  takenAt: Date;
}

interface IMessage {
  name: string;
  email: string;
  message: string;
}

export type {
  IProject, IPhoto, IMessage,
};
