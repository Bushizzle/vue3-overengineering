Comments:
1. While dividing .scss modules might breach the SRP, it enhances the readability and maintainability of our code
2. I've utilized a service layer to encapsulate stores. This approach helps maintain the consistency of services, sidestepping the need for side effects in the stores

TODOS:
1. Implement real-time cache invalidation for the transport layer
2. Add tests
3. Determine whether the user service ought to be designed as a singleton
4. Decide if it's possible to use some kind of services composition (without writing another framework)
5. Move apikey to .env
6. Add a loading indicator
7. Move errors text to constants