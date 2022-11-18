# **Machine Learning Algorithm**
## *Supervised learning*
### Linear regression
: Assume relationship between response and multiple variables as linear model and find optimal line to explain it.  

![](LR.png)

### Logistic regression
: If the value of response is categorical, it's hard to apply linear regression. So in logistic regression use logistic function not linear model to assume the relationship.   
Logistic function get all values as variables and result between 0 to 1.    
Logistic regression also can use to classification problem, usually to binary classification. If want to solve multi class problem, use multinomial logistic regression.  

![](LoR.png)

### kNN
: When predict response of variable, check nearest 'n' values and predict as superior one.  
To measure distance Euclidean distance and Manhattan distance. Euclidean distance is shortest straight line and Manhattan distance is grid distance.    

![](kNN.png)

### Support Vector Machine
: To classify values, find optimal hyperplanes that maximizing margin. Margin means distance between hyperplane and data.   
Support vector is that closest data from hyperplane.     
When train model, can set number of support vector to include in margin.    

![](SVM.png)

### Decision Tree
: To analyize data, make divergence using feature/attribute/columns. For example wheather value of specific feature is over 10.  
From root to down, data is divided to nodes. Using these nodes both regression and classification are available.     

![](DT.jpg)

### Random Forest
: Use multiple decision trees.  

![](RF.png)

---
## *Unsupervised learning*
### k-means clustering
: To make cluster, dot random point and make group according to distance between point and data. And also dot center point of group, repeat the procedure. If there's no change to point, stop the procedure. Each group is one cluster.   
Before training should set the number of cluster.

![](kMeans.png)

### Hierarchical clustering
: Make dendrogram according to distance between data. Cut tree in proper point, can make clusters.  
To measure distance bewteen cluster and single data or cluster and cluster, sklearn provide 3 ways.    
Single, measure the distance of closest data.   
Complete, measure the distance of farthest data.    
Average, measure the distance between all data in cluster and average it.   

![](Hierarchical.png)

---
imgs from wikipedia (https://en.wikipedia.org/)

for more study see,     
https://ratsgo.github.io/