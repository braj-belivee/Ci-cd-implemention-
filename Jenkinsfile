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
                sh 'docker compose down || true'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Wait') {
            steps {
                sh 'sleep 15'
            }
        }
    }

    post {
        always {
            sh 'docker compose down'
        }
    }
}