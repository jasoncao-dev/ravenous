const apiKey = 'g2M0Dn2u8hCgDpUanVACgqqWG_p1bgBX87AIO2BqqyKBA7KQRdlONgqqtZLmn4W2lclcC9HFe_rrrF3yc2RRbyE4AoA6V-Ae0bHZ2U582EMiUn_aaHitIAho6eA3YXYx'
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => response.json()).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
}

//console.log(Yelp.search('Asian', 'Cincinnati', 'best_match'))

export default Yelp