import { describe, it, expect } from 'vitest';
import { getDocuments, getDocument, IDocument, IDocumentAttributes } from './document.js';

describe('document', () => {
    describe('getDocuments', () => {
        it('should return an array of documents', () => {
            const result = getDocuments('test-user-id');
            expect(Array.isArray(result)).toBe(true);
        });

        it('should return at least one document', () => {
            const result = getDocuments('test-user-id');
            expect(result.length).toBeGreaterThan(0);
        });

        it('should return documents with required properties', () => {
            const result = getDocuments('test-user-id');
            const document = result[0];
            
            expect(document).toHaveProperty('id');
            expect(document).toHaveProperty('title');
            expect(document).toHaveProperty('path');
            expect(typeof document.id).toBe('string');
            expect(typeof document.title).toBe('string');
            expect(typeof document.path).toBe('string');
        });

    });

    describe('getDocument', () => {
        it('should return document attributes', () => {
            const result = getDocument('test-document-id');
            expect(result).toBeDefined();
        });

        it('should return document with all required attributes', () => {
            const result = getDocument('test-document-id');
            
            expect(result).toHaveProperty('id');
            expect(result).toHaveProperty('title');
            expect(result).toHaveProperty('path');
            expect(result).toHaveProperty('createdAt');
            expect(result).toHaveProperty('updatedAt');
            expect(result).toHaveProperty('createdBy');
            expect(result).toHaveProperty('updatedBy');
        });

        it('should return valid ISO date strings for timestamps', () => {
            const result = getDocument('test-document-id');
            
            expect(() => new Date(result.createdAt)).not.toThrow();
            expect(() => new Date(result.updatedAt)).not.toThrow();
            expect(new Date(result.createdAt).toISOString()).toBe(result.createdAt);
            expect(new Date(result.updatedAt).toISOString()).toBe(result.updatedAt);
        });

        it('should return string values for all properties', () => {
            const result = getDocument('test-document-id');
            
            expect(typeof result.id).toBe('string');
            expect(typeof result.title).toBe('string');
            expect(typeof result.path).toBe('string');
            expect(typeof result.createdAt).toBe('string');
            expect(typeof result.updatedAt).toBe('string');
            expect(typeof result.createdBy).toBe('string');
            expect(typeof result.updatedBy).toBe('string');
        });

    });
});

