```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js
import {usePathname} from 'next/navigation';
export default function About(){
    const pathname = usePathname();
    return(
        <div>About {pathname}</div>
    );
}
```