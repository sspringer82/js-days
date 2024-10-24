# Aufgabe 2: Loaders und Actions

https://reactrouter.com/en/main/route/loader

Füge zur `/list`-Route einen Loader hinzu, der die Daten vom Backend lädt (API-Funktion).
Greife in der Komponente über `useLoaderData` auf die Daten zu.

https://reactrouter.com/en/main/route/action

Integriere eine `action` in die `/create` route, diese Funktion sendet die Daten zum Server.
Nutze das `RouterForm`, um das Formular mit der Action zu verbinden.

```ts
async function formAction({ request, params }) {
  const formData = await request.formData();
  const id = params.id;
  const firstname = formData.get('firstname');
```