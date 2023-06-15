This is an experimental project that employs Vue3, Typescript, and Pinia, using a unique architecture that positions
services as an intermediary layer between the view and the stores. The architectural flow can be summarized as follows:
View => Service<Store> => Api => Transport<cache>.

To the best of my knowledge, using services with Vue is not a conventional approach, and a project of this scale would
typically leverage store side effects mechanics. However, this project serves as a proof of concept, designed with an
emphasis on scalability and ease of maintenance.

Moreover, segregating .scss files from .vue templates deviates from Vue's Single File Component principle. However, it
enhances code readability as modules situated close to components are easier to locate. Additionally, this approach
results in more concise and simpler component code.

TL;DR:
1. Flow: View => Service<Store> => Api => Transport<cache>. Unusual but funny, don't judge the POC.
2. Service layer encapsulates stores. This approach helps maintain the consistency of services.
3. Separated .scss modules breaks the SRP, but enhances the readability and maintainability of our code.

TODOS:
1. Fix Eslint, whose parser works incorrectly with Vue3 setup script syntax.
2. Implement real-time cache invalidation for the transport layer
3. Add tests
4. Determine whether the user service ought to be designed as a singleton
5. Decide if it's possible to use some kind of services composition (without writing another framework)
6. Move apikey to .env
7. Add a loading indicator
8. Move errors text to constants