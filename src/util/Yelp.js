
 const yelp = {
    search(term, location, sortBy){
        return fetch(`http://thefoodiesserver.herokuapp.com/search?term=${term}&location=${location}&sort_by=${sortBy}`
        ).then(response => response.json()
        ).then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            } 
            throw new Error('Request failed! Please refresh page and try to enter both the name of the business and the location.');
        })
    }

}

export default yelp;
