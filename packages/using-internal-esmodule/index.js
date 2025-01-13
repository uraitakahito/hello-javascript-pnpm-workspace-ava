//
// Named import without `default export`:
//
// Good:
import { named1 } from 'named-exports-no-default';
import * as namespaceObject1 from 'named-exports-no-default';
// Bad: The requested module does not provide an export named 'default'
// import defaultExport1 from 'named-exports-no-default';

// Named import without `default export`:
console.log(named1);
console.log(namespaceObject1.named1, namespaceObject1.named2);
