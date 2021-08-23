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

export type {
  IProject, IPhoto,
};
