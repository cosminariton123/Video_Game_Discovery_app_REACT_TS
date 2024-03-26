import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a301374a359f465987f389108bf98d0c"
    }
})