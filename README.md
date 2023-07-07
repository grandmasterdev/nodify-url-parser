# @nodifier/url-parser

A node module to parse url string into object of url components

## How to use?

```typescript
import { parseUrl } from "@nodify/url-parser";

const urlComponents = parseUrl("https://mytestdomain.com/sample/read?book=1");
```

### Output

```json
{
  "host": "mytestdomain.com",
  "protocol": "https",
  "path": "/sample/read",
  "queryString": "book"
}
```

## Return Types

```typescript
host: string;
path: string;
port: string;
protocol: string;
username: string;
password: string;
```
