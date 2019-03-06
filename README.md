#### User Stories

- As a trainer I want to search by Pokémon name so that I can find my favorite ones
- As a trainer I want to view details on a specific Pokémon so that I can know if they're right for my team
  - type(s)
  - sprite
  - stats
  - moves
- As a trainer I want to view details on a specific move so that I can assemble the perfect move list
  - Some things you could include (don't need all):
    - PP
    - power
    - accuracy
    - type
    - effect
    - type effectiveness
    - damage class
- As a trainer I want to add a Pokémon to my team so that I can be the very best like no one ever was
  - No more than 6 on a team
- As a trainer I want to view my team so that I can build the perfect team composition

**Bonus**

- As a trainer I want to select my Pokémon's moveset so that I can perfectly balance my team
  - no more than 4 moves per pokemon
- As a trainer I want to search items so that I can give them to my Pokémon
- As a trainer I want to give my Pokemon items so that they will be more powerful in battle
  - No more than 1 item per pokemon

#### Hints

Read the [docs](https://pokeapi.co/docs/v2.html)!

`GET /api/v2/{endpoint}/` will give you a list of all the resources for that endpoint. For example `GET /api/v2/pokemon` will give you a list of all of the Pokémon. By default, this list is limited to 20 results. Use the query param `limit` to get more. For example: `GET /api/v2/pokemon?limit=964` will give you all the Pokémon (with names and url to that resource) in the database. You may want to use this to get your initial state for some of your components (perhaps to make search quicker).

The API is rate limited to 100 requests per minute, so be careful with how often you are hitting the endpoint or you will be throttled.

## Resources

- React
  - [Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)