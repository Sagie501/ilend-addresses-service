# IlendServiceSeed

This project is micro service seed that created with express and apollo-server.

## Creating a new service

In order to create a new service based on this seed follow this steps:
1. Create a new repository for your service.
2. Clone this repository: `git clone https://github.com/Sagie501/ILend-Service-Seed.git`
3. Move to the cloned directory: `cd ILend-Service-Seed`
4. Change the remote: `git remote set-url origin https://github.com/USERNAME/REPOSITORY.git`
5. Push the files to the new remote: `git push -u origin master`

## Customize your new service

Your current new service is exactly like the seed. We will need to make some changes in order to customize it.
In order to do it follow this steps:
1. Change the directory name to the name of the new repository.
2. In the `packages.json` file change the `name` field that will fit to your service name.
3. In the `config.ts` file change the `serviceName` field that will fit to your service name.
4. Remove the `README.md` file.
5. Rename the `README-NEW.md` file to `README.md`
6. Inside the new `README.md` file rename the title that will fit to your service name.
7. Inside the `entities` directory you will see example of entities. Remove them and add your entities directories. Now you can start develop your `schema`, `resolvers` and `connectors`.
8. Inside the `data-source` directory you will find an example seed data source. Delete it, create your own data source and add the connectors to this data source
9. In the `root-resolvers` and `root-schema` directories you will need to import your `schema` and `resolvers`.
10. Follow the new `README.md` file in order to see how start using your new service.


### Enjoy!
