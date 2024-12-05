const GOOGLE_API_KEY=AIzaSyD0CQymCwPmRLYj1z0aAl6mkSdUNbewFuo;
export function getMMapPreview(lat,lng){
    const imagepreview=`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}Y&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=YOUR_API_KEY`
    return imagepreview
}