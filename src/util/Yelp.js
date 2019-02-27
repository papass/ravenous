const apiKey = 'QK_4R4m_95ZTgRM8pQJEZDyAlSsCZiAnl90OGv_7Rz4hJpk75KrIK6piQNbBq2hQBkmAwQKsKubBPGb8kYA-W89nwmp_MOwg9nqmLBYOBbQZEzmp1H7s8BEkVj12XHYx';

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    return {
                        id : business.id,
                        imageSrc : business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        });
    }
};

export default Yelp;
