import { useState } from "react";
import { Link } from "react-router-dom";
import placesData from "./places.json"; // Importar el JSON directamente

export default function IndexPage() {
  const [places, setPlaces] = useState(placesData); // Utilizar el JSON importado como estado

  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {places.length > 0 && places.map(place => (
        <Link to="/register" key={place._id}> {/* Redirigir a la página de registro al hacer clic */}
          <div>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
              {place.photos?.[0] && (
                <img className="rounded-2xl object-cover aspect-square" src={place.photos?.[0]} alt=""/>
              )}
            </div>
            <h2 className="font-bold">{place.address}</h2>
            <h3 className="text-sm text-gray-500">{place.title}</h3>
            <div className="mt-1">
              <span className="font-bold">${place.price}</span> per night
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
