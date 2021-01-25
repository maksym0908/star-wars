import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/', 
    withCredentials: false  
})

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] = 'application/json'




 const getPeople = async () => {
    try {
        let arr = []
        for ( let i = 1; i <= 10; i++) {
            await instance.get(`people?page=${i}`)
            .then(res => { arr.push(res.data.results)} )
            .catch(err => console.log(err))
         
        }
        return arr.reduce((res, obj) => [...res, ...obj], [])
    } catch (error) {
        throw error
    }

}

 const getHomeWorlds = async () => {
    try {
        let arr = []
        for ( let i = 1; i <= 7; i++) {
            await instance.get(`planets?page=${i}`)
            .then(res => arr.push(res.data.results))
            .catch(err => console.log(err))
        }
        return arr.reduce((res, obj) => [...res, ...obj], [])
    } catch (error) {
        throw error
    }
}

 const getVehicles = async () => {
    try {
        let arr = []
        for (let i = 1; i <= 4; i++) {
            await instance.get(`vehicles?page=${i}`)
            .then(res => arr.push(res.data.results))
            .catch(err => console.log(err))
        }
        return arr.reduce((res, obj) => [...res, ...obj], [])
    } catch (error) {
        throw error
    }
}

 const getFilms = async () => {
    try {
        let arr = []
        for (let i = 1; i <= 6; i++) {
            await instance.get(`films?page=${i}`)
            .then(res => arr.push(res.data.results))
            .catch(err => console.log(err))
        }
        return arr.reduce((res, obj) => [...res, ...obj], [])
    } catch (error) {
        throw error
    }
}

export const getAllData = async () => {
    const characters = await getPeople()
    const homeWorlds = await getHomeWorlds()
    const vehicels = await getVehicles()
    const films = await getFilms() 
   return characters.map(c => {
        let filteredHomeworlds = homeWorlds.filter(h => h.url === c.homeworld)[0]
        let filteredVehicles = vehicels.filter(v => c.vehicles.includes(v.url))
        let filteredFilms = films.filter(f => c.films.includes(f.url))
        c.homeworld = filteredHomeworlds.name
        c.vehicles = filteredVehicles
        c.films = filteredFilms
        c.liked = false
        return c
    })
}


export const handleSignIn = async token => {
    await axios({method: 'POST', url: `http://localhost:5000/`, data: { token }
   }).then(async res => getInfo(res.data.access_token)).catch(error => {throw error})
}

 const getInfo = async accessToken => { 
    await axios({method: 'POST', url: 'http://localhost:5000/user', data: { accessToken }})
    .then(res => {
        localStorage.setItem('userData', JSON.stringify(res.data))
        return res.data
    } ).catch(err => err)
    
}


