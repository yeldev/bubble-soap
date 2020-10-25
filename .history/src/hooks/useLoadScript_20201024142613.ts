import { useState, useEffect } from "react";

const libraries = ["places", "geometry"] as const;

type Props = {
  apiKey: string,
  libraries: typeof libraries
}

type LoadScript = {
  success: boolean,
  error: boolean
}

export const useLoadScript = (props: Props): LoadScript => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const initMap = (param: any) => {
    console.log(param)
  }

  useEffect(() => {
    const script = document.createElement('script');
    try {
      script.src = `https://maps.googleapis.com/maps/api/js?key=${props.apiKey}&libraries=${props.libraries.join(",")}&callback=initMap`;
      script.defer = true;
      document.head.appendChild(script);
      setSuccess(true);
    } catch (error) {
      setError(true);
    }
    return () => {
      script.remove();
    }
  }, [props.libraries, props.apiKey]);

  return {success, error}
}