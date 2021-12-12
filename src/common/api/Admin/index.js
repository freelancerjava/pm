
export default (api) => {
    return {
        orderDetail: (data) => {
            var filter = {
                where: {
                    tracking_code: data.tracking_code,
                    order_number: data.order_number
                },
                include: "user"
            }
            return api.get(`/api/loads?filter=${JSON.stringify(filter)}`)
        },
        routeList: (data) => {
            return api.get(`/api/loads/route/list/${data.id}`)
        },
        geocoder: (data) => {
            // data.lat = "41.409977630342624"
            // data.long = "-81.56301796080221"
            // console.log("data",data)
            return api.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + data.lat + ',' + data.long + '&key=' + 'AIzaSyC0xL5zLMfMAL0XzrBW9TFEgXpg2OsyteU')
        },
        getLastRoute: (data) => {
            const filter = {
                where: {
                    loadId: data.id,
                },
                limit: 1,
                order: "id DESC"
            }
            return api.get(`/api/locations?filter=${JSON.stringify(filter)}`)
        },
        hourlyList: (data) => {
            return api.get(`/api/loads/${data.id}/activities`)
        },
        attachmentList: (data) => {
            return api.get(`/api/loads/${data.id}/attachments`)
        }
    }
}
