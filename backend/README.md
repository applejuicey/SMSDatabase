### DEVELOPMENT
#### 1. Download example & install dependencies
Clone the repository:  
```
git clone git@github.com:applejuicey/SMSDatabase.git
```
Install Node dependencies:  
```
cd backend
npm install
```
#### 2. Launch Prisma with Docker
First you should have Docker installed. Then launch the containers:
```
cd backend
docker-compose up -d
```
Use these codes to control your containers and images:
```
docker ps -a //show all your containers
docker-compose stop //stop running containers
docker rm CONTAINERID //remove a stopped container by CONTAINERID
docker images //show all your images
docker rmi CONTAINERID //remove a image by IMAGEID
```
After that you can manage the prisma server on http://localhost:4466/management  
Use this command to get your prisma server token:
```
prisma cluster-token //get a token according to the managementApiSecret in docker-compose.yml
export PRISMA_MANAGEMENT_API_SECRET="my-server-secret"
```
NOW YOU HAVE A PRISMA SERVER RUNNING IN A DOCKER CONTAINER!  
@LOCALHOST:4466
#### 3. Install the Prisma CLI
Install the Prisma CLI:
```
npm install -g prisma@VERSION //install prisma by VERSION
```
Some commands that might be useful:
```
npm uninstall -g prisma //uninstall prisma
```
#### 4. Set up database & deploy Prisma datamodel
To deploy the datamodel, run the following command:
```
prisma deploy
```
The command above automatically run those then:
```
prisma generate
prisma seed
```
Some commands that might be useful:
```
prisma info //see the current prisma server according to prisma.yml
prisma reset //clear the current prisma server database according to prisma.yml
prisma delete //delete the current prisma server according to prisma.yml
prisma token //get a token according to the secret in prisma.yml
```
NOW YOU HAVE YOUR CUSTOMIZED PRISMA SERVER RUNNING AT:  
LOCALHOST:4466/${NAME}/${STAGE}
#### 5. Run the script
Execute the script with this command:
```
npm run start
```