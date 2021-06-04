
// Response Types

export interface IAnimeData {
  data: {
    User: {
      name: string
      statistics: Statistics
      favourites: Favourites
    }
  }
}
export interface Statistics {
  anime: {
    count: number
    episodesWatched: number
    minutesWatched: number
  }
}
export interface Favourites {
  anime: {
    nodes: Node[]
  }
}
export interface Node {
  idMal: number
  id: number
  genres: string[];
  title: {
    native: string
    userPreferred: string
    english: string
  }
  coverImage: {
    large: string
    color: string
  }
}
// TYPES END

const query = `
query($username: String){
  User(name: $username) {
    name
    statistics{
      anime{
        count
        episodesWatched
        minutesWatched
      }
    }
    favourites {
      anime {
        nodes {
          idMal
          id
          genres
          title {
            native
            userPreferred
            english
          }
          coverImage {
            large
            color
          }
        }
      }
    }
  }
}
`

export const getAnimeData = async (): Promise<IAnimeData> => {
  const res = await fetch('https://graphql.anilist.co/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query, variables: {
        username: "piyushsthr"
      }
    })
  })
  const data = await res.json()
  console.log(data)
  return data
}