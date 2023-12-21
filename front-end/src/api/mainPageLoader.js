import { redirect } from "react-router-dom"
import { BACKEND_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api"

export const mainPageLoader = ({ params }) => {
    const backendPath = PATH_TO_ENDPOINT_MAPPING[params.gender]

    if(backendPath) {
      return fetch(`${BACKEND_URL}/${backendPath}`)
    }

    return redirect('/kobieta')
  }