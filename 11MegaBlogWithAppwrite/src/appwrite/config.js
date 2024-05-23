import conf from '../conf/conf.js'
import {Client, ID, Databases, Storage, Query} from 'appwrite'

export class Service {
    client = new Client();
    databases;
    storage;

    constructor () {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,  // we are using slug as Document ID or else we can use ID.unique
                {
                    title,
                    content, 
                    featuredImage, 
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }
    
    async updatePost(slug,{title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content, 
                    featuredImage, 
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }
    
    async deletePost (slug) {
        try {
            await this.databases.deleteDocument(  // we dont need to return the details of the document
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;  // we will handle this in frontend
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    async getPost (slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }
    async getPosts (queries = [Query.equal("status", "active")]) {  // we only need to return the documents which have active status, for this we need to do query
        try {
            return await this.databases.listDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    // file upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createDocument(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
}

const service = new Service();
export default service