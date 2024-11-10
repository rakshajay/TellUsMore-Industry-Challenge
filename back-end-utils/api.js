import axios from 'axios';
const BASEURL = "https://api.tvmaze.com";

class showsApi {
    constructor() {
        this.baseUrl = BASEURL;
    }

    async getAllShows(){
        try {
            const showsUrl = `${this.baseUrl}/shows`;
            let response = await axios.get(showsUrl);
            return(response.data);  
        } 
        
        catch (error) {
            console.error("Error fetching all shows:", error);
        }
        
    }
}

export default showsApi;