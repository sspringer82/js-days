# Aufgabe 1: React Router

- Erzeuge eine List-Component, die vom Backend die Daten lädt (http://localhost:3001/users) und in einer einfachen Liste anzeigt.
- Die List-Component ist über /list erreichbar
- Erzeuge eine Details-Component, die vom Backend die Daten lädt (http://localhost:3001/users/id)
- Die Details-Component ist über /details/:id erreichbar
- Auf die Variable greifst du über `const {id } = useParams()` zu
- Erzeuge eine Standardroute '/', die auf '/list' umleitet (`<Navigate to="/list" />`)
- Erzeuge eine Component `<NotFound />`, die alle anderen Routen abdeckt `path: '*'`