```javascript
// pages/about.js
import {useSearchParams} from 'next/navigation';
export default function About(){
    const [searchParams] = useSearchParams();
    const pathname = searchParams.get('path');
    return(
        <div>About {pathname}</div>
    );
}
```