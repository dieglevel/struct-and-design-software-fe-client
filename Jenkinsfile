pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Preparation') {
            steps {
                echo 'Preparing workspace and environment...'
            }
        }

        stage('Checkout Source Code') {
            steps {
                git branch: 'main', url: 'https://github.com/dieglevel/struct-and-design-software-fe-client.git'
            }
        }

        stage('Setup Environment Variables') {
            steps {
                 configFileProvider([configFile(fileId: 'struct-and-design-software-fe-web-client', targetLocation: '.env')]) {
                    sh 'ls -la && cat .env' 
                }
            }
        }
         stage('Build and Restart Docker Containers') {
            steps {
                script {
                    sh '''
                    docker-compose down
                    docker-compose up --build -d
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
