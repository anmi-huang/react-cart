import React, { useState, useEffect } from 'react'
import Content from './Content'
import { Link, useParams } from 'react-router-dom'
import SlideView from 'components/SlideView'
const HomePage = () => {
    const [data, setData] = useState([])

    const [locationData, setLocation] = useState(null)
    let { locationId } = useParams()

    useEffect(() => {
        fetch('static-api/forecast.json')
            .then((resp) => resp.json())
            .then(({ success, data }) => {
                setData(data)
            })
            .catch(console.error)
    }, [])

    useEffect(() => {
        if (!data || !locationId) return
        //現在的locationId跟locationData?.location一樣，就不要render
        if (locationId !== locationData?.location) {
            setLocation(data.find((item) => item.location == locationId))
            console.log('city change')
        }
    }, [locationId, data])

    return (
        <div>
            <div className="p-4">
                <div className="d-flex flex-shrink-0 position-relative mb-1 ">
                    <Link className="btn w-6 h-6 border-0 position-relative z-100" to="/">
                        <i className="icon icon-home mr-1 fz-20px text-secondary" aria-hidden="true"></i>
                    </Link>
                    <h1 className="fz-18px d-flex justify-content-center align-items-center fill-parent font-weight-bolder">
                        天氣資訊
                    </h1>
                </div>
            <ul> 
                {data.map((item, i) => (
                    <li className="mb-2" key={i}>
                        <Link
                            to={`/weather/${item.location}`}
                            className="btn justify-content-between w-100 h-6 px-2 rounded"
                        >
                            {item.location}
                            <i className="icon icon-arrow-right fz-13px" aria-hidden="true"></i>
                        </Link>
                    </li>
                ))}
            </ul>
            </div>  
            <SlideView isShow={locationId} className="bg-light">
                <div className="d-flex flex-shrink-0 bg-light position-relative shadow">
                    <Link className="btn w-6 h-6 border-0 position-relative z-100" to="/weather">
                        <i className="icon icon-arrow-left" aria-hidden="true"></i>
                        <span className="sr-only">返回</span>
                    </Link>
                    <div className="d-flex justify-content-center align-items-center fill-parent font-weight-bolder fz-20px">
                        {locationData?.location}
                    </div>
                </div>

                <div className="flex-fill scroll-blk">
                    <Content locationData={locationData} />
                </div>
            </SlideView>
        </div>
    )
}
export default React.memo(HomePage)
