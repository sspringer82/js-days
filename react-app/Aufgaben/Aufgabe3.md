# Aufgabe 3: TSQuery

https://tanstack.com/query/latest/docs/framework/react/installation
https://www.npmjs.com/package/react-error-boundary


1. Installiere Tanstack Query + react-error-boundary
2. Integriere den QueryClientProvider (https://tanstack.com/query/latest/docs/framework/react/quick-start)
3. Wrappe die <List>-Component in die ErrorBoundary und Suspense jeweils mit Fallback
4. Nutze die useSuspenseQuery({queryKey: 'myKey', queryFn: getAllUsers})