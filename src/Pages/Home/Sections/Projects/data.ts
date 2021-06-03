export interface IRepo {
  owner: "piyushsuthar",
  repo: string,
  description: string
  stars: number | string
  forks: number | string,
  language: string,
  link: string

}

export const getRepos = async (): Promise<IRepo[]> => {
  const res = await fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=piyushsuthar')
  return res.json()
}

// export const Repos: IRepo[] = 