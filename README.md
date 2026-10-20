MD. RIAJUDDIN RUMMAN
23-54604-3
Section - E


Copied the boiler plate into the directory.
Then,created the modules using :
nest g resource module employees
nest g resource module products

Started postgres server using : 
brew services start postgres -> Opening and listening to 5432 port

Configured necessary components.
run : pnpm migration:run -> for running migration
run : pnpm run start:dev -> for building and running the server

Ran postman, sent api request to url: http://localhost:5001/employees & http://localhost:5001/products. All api requests were satisfied.

Attaching all the necessary Screenshots :