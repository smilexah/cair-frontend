import {MetadataRoute} from 'next';


export default async function manifest(): Promise<MetadataRoute.Manifest> {

    return {
        name: "CAIR - Cental of AI Research",
        start_url: '/',
        theme_color: '#101E33'
    };
}
