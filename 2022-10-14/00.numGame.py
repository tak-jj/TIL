import random

randomNumber = random.randint(1,100)
#print(random_number)

gameCount = 1

while True:
    myNumber = int(input("guess number between 1-100"))
    #input으로 받은 것은 string
    if myNumber > randomNumber:
        print('Down!')
    elif myNumber < randomNumber:
        print('Up!')
    else:
        print(f'Congratuation!! tried {gameCount} times')
        #string 앞에 f를 붙이면 string안의 변수 인식 가능
        break
    
    gameCount += 1
#Err Handling 추가해보기