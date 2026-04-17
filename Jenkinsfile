pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }

        stage('Clean Old') {
            steps {
                sh 'docker-compose -f Docker-compose.yaml down || true'
            }
        }

        stage('build image') {
            steps {
                script{
                    echo "building the image file"
                    withCredentials([usernamePassword(credentialsId:'docker-hub-repo',passwordVariable:'PASS',usernameVariable:'USER')])
                    {
                        sh 'docker build -t brajbelivee/practisee:latest .'
                        sh 'echo $PASS| docker login -u $USER --password-stdin'
                        sh 'docker push brajbelivee/practisee:latest'
                    }     
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                echo 'deploy to EC2'
                def dockercmd = 'docker-compose -f Docker-compose.yaml up -d'
                sshagent(['ec2-user']) {
                 sh "ssh -o StrictHostKeyChecking=no ubuntu@3.85.134.113 ${dockercmd}"

                }
            }
        }

        stage('Wait') {
            steps {
                sh 'sleep 15'
            }
        }
    }
}